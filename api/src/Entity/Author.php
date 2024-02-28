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
    normalizationContext: ['groups' => ['author:read']],
)]
#[ApiFilter(
    SearchFilter::class,

    properties: ['firstName' => 'ipartial', 'lastName' => 'ipartial']
)]
class Author
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    #[Groups(["book:read", 'author:read'])]
    public ?int $id = null;




    #[ORM\Column(type: "string")]
    #[Assert\NotBlank]
    #[Groups(["book:read", 'author:read'])]
    public string $firstName;




    #[ORM\Column(type: "string")]
    #[Assert\NotBlank]
    public  string $lastName;





    #[ORM\Column(type: "text")]
    #[Assert\NotBlank]
    public string $bibliography;




    /**
     * @var Book[]|ArrayCollection
     */
    #[ORM\OneToMany(targetEntity: Book::class, mappedBy: "author")]
    #[Groups(['author:read'])]

    public iterable $books;





    // Constructor
    public function __construct()
    {
        $this->books = new ArrayCollection();
    }
}
