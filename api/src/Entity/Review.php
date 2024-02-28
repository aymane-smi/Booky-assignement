<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ApiResource()]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]

    public $id;

    #[ORM\Column(type: "string")]
    #[Assert\NotBlank]
    public $fullName;

    #[ORM\Column(type: "string")]
    #[Assert\Email]
    public $email;

    #[ORM\Column(type: "text")]
    #[Assert\NotBlank]
    public $comment;

    #[ORM\Column]
    #[ApiProperty(writable: false)]
    public ?\DateTimeImmutable $creationDate = null;

    #[ORM\ManyToOne(targetEntity: Book::class, inversedBy: "reviews")]
    #[JoinColumn(nullable: false)]
    public ?Book $book = null;

    #[ORM\PrePersist]
    public function prePersist()
    {
        $this->creationDate = new \DateTimeImmutable();
    }
}
