<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * SP123 Omega theme.
 */

function sp123_omega_preprocess_html(&$vars) {
  $viewport = array(
   '#tag' => 'meta',
   '#attributes' => array(
     'name' => 'viewport',
     'content' => 'width=device-width, initial-scale=1, user-scalable=yes',
   ),
  );
  drupal_add_html_head($viewport, 'viewport');
}