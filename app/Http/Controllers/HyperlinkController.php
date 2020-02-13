<?php

namespace App\Http\Controllers;

use App\Hyperlink;
use Exception;
use Illuminate\Http\Request;

class HyperlinkController extends Controller
{

    public function all() {
        return Hyperlink::all();
    }

    public function get(Hyperlink $hyperlink) {
        return $hyperlink;
    }

    public function create(Request $request) {
        Hyperlink::create($request->all());
    }

    public function update(Hyperlink $hyperlink, Request $request) {
        $hyperlink->update($request->all());
    }

    public function delete(Hyperlink $hyperlink) {
        try {
            $hyperlink->delete();
        } catch (Exception $e) {
        }
    }

}
