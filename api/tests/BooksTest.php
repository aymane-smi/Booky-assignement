<?php
    namespace App\Tests;

    use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
    use App\Factory\BookFactory;
    use App\Factory\AuthorFactory;
    use Zenstruck\Foundry\Test\Factories;
    use Zenstruck\Foundry\Test\ResetDatabase;
    use App\Entity\Book;
    use App\Entity\Author;

    class BooksTest extends ApiTestCase{
        use ResetDatabase, Factories;

        public function testUpdateBook(): void{
            BookFactory::createOne(["id" => 1]);
            $iri  = $this->findIriBy(Book::class, ["id" => 1]);
            $response = static::createClient()->request('PATCH', $iri, [
                'json' => [
                    'title' => 'updated title',
                ],
                'headers' => [
                    'Content-Type' => 'application/merge-patch+json',
                ]
            ]);
            //assertions
            //assert that response is 200
            $this->assertResponseStatusCodeSame(200);
            //assert the response header is a vali json-ld
            $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
            $this->assertJsonContains([
                    "id"=> 1,
                    "title" => "updated title"
            ]);
        }
        public function testCreateBook(): void{

            $author = AuthorFactory::createOne();
            print_r("id:".$author->id."\n");

            $response = static::createClient()->request('POST', '/books', [
                "headers" => [
                    "content-type" => "application/ld+json"
                ],
                "json" => [
                    "title" => " book 1",
                    "description" => "book 1 description",
                    "publicationDate" => "2024-07-31T00:00:00+00:00",
                    "genre" => "booke genre",
                    "author" => "authors/1"
                ]
            ]);
            //assertions
            //assert that response is 201
            $this->assertResponseStatusCodeSame(201);
            //assert the response header is a vali json-ld
            $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
            $this->assertJsonContains([
                "title" => " book 1",
                    "description" => "book 1 description",
                    "publicationDate" => "2024-07-31T00:00:00+00:00",
                    "genre" => "booke genre"
            ]);

        }
        public function testGetCollection():void{

            //create factories first
            BookFactory::createMany(10);
            //send a mock request to the server
            $response = static::createClient()->request('GET', '/books');

            //assertions
            //assert that response is valid 2xx
            $this->assertResponseIsSuccessful();
            //assert the response header is a vali json-ld
            $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
            //check if the request contain 10 books
            $this->assertJsonContains([
                "hydra:totalItems" => 10
            ]);
            $this->assertCount(10, $response->toArray()['hydra:member']);
            $this->assertMatchesResourceCollectionJsonSchema(Book::class);

        }

        public function testDeleteBook(): void{
            BookFactory::createOne(["id" => 1]);
            $iri  = $this->findIriBy(Book::class, ["id" => 1]);
            $response = static::createClient()->request("DELETE",$iri);
            $this->assertResponseStatusCodeSame(204);
            $this->assertNull(
            // Through the container, you can access all your services from the tests, including the ORM, the mailer, remote API clients...
                static::getContainer()->get('doctrine')->getRepository(Book::class)->findOneBy(["id" => 1])
            );
        }
    }
?>
