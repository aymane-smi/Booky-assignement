<?php

namespace App\Story;

use Zenstruck\Foundry\Story;
use App\Factory\ReviewFactory;

final class DefaultReviewsStory extends Story
{
    public function build(): void
    {
        ReviewFactory::createMany(10);
    }
}
