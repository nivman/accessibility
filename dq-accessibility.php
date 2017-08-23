<?php
/*
 * Plugin Name: DevQuest accessibility plugin
 * Plugin URI:
 * Description: customized accessibility plugin
 * Version: 0.1.0
 * Author: DevQuest Software Solutions
 * Author URI: https://dqsoftwaresolutions.com
 * License: GPL v2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pretty-portfolio
 * Domain Path:
*/

if (!function_exists('add_action')){
    echo 'not';
    exit();
}

//hooks
//register all our shortcode on init
add_action('init','dq_accessibility_register_shortcodes');
add_action('wp_enqueue_scripts','dq_accessibility_scripts');

//shortcode

//register all our shortcode
function dq_accessibility_register_shortcodes(){

    add_shortcode('dq_accessibility_controls','dq_accessibility_shortcode');
}

function dq_accessibility_shortcode($args,$content=""){

    //setup our output var
    $play_img = plugins_url('/images/play.png',__FILE__);
    $pause_img = plugins_url('/images/pause.png',__FILE__);

    $output = '
    <div id="video-controls" class="ctrls">
        <button type="button" role="button" id="play-button"><img src='.$play_img.' alt="play>"</button>
        <button type="button" role="button" id="pause"><img src=' .$pause_img .' alt="pause"></button>
    </div>';

    //return  $output;

}


//scripts
function dq_accessibility_scripts(){
    wp_register_script('dq-js-public',plugins_url('/js/dq-accessibility.js',__FILE__),array('jquery'),'',true);
    wp_register_style('dq-css-public',plugins_url('/css/dq-accessibility.css',__FILE__),array());
    wp_enqueue_script('dq-js-public');
    wp_enqueue_style('dq-css-public');
}
