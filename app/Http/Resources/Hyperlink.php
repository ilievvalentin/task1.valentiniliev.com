<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Hyperlink extends JsonResource
{

    /**
     * @var mixed
     */
    private $id;

    /**
     * @var mixed
     */
    private $link;

    /**
     * @var mixed
     */
    private $title;

    /**
     * @var mixed
     */
    private $color;

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'link' => $this->link,
            'title' => $this->title,
            'color' => $this->color,
        ];
    }
}
