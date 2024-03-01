<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ApiResource(
    normalizationContext: ['groups' => ['book:read']],
    //denormalizationContext: ["groups" => ["book_write"]]

)]
#[ApiFilter(
    SearchFilter::class,
    properties: ['title' => 'ipartial', 'author' => 'ipartial', 'genre' => 'ipartial']
)]
class Book
{



    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    #[Groups(["book:read"])]
    public ?int $id = null;




    #[ORM\Column(type: "string")]
    #[Assert\NotBlank]
    #[Groups(["book:read",'author:read'])]
    public string  $title;




    #[ORM\Column(type: "text")]
    #[Assert\NotBlank]
    #[Groups(["book:read"])]
    public  string $description;




    #[ORM\Column]
    #[Assert\NotNull]
    #[Groups(["book:read"])]
    public ?\DateTimeImmutable $publicationDate = null;




    #[ORM\Column(type: "string")]
    #[Assert\NotBlank]
    #[Groups(["book:read"])]
    public string $genre;



    #[ORM\ManyToOne(targetEntity: Author::class, inversedBy: "books")]
    #[Assert\NotBlank]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["book:read"])]
    public ?Author $author = null;




    #[ORM\OneToMany(targetEntity: Review::class, mappedBy: "book")]
    // #[Groups(["book:read"])]
    public iterable $reviews;


    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }
}
