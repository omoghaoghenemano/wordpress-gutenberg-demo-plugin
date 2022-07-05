<?php

/*
Plugin Name: Javascript Plugin by Mano Omogha
Description: A truly amazing plugin.
Version:1.0
Author: Oghenemano Omogha
*/
if (!defined('ABSPATH')) exit;

class LetDiveToJavascript
{
    function __construct()
    {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssests'));
    }
    function adminAssests()
    {
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    }
}

$letsDiveToJavascript = new LetDiveToJavascript();
