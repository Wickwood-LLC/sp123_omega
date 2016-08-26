<?php

/**
 * Implements hook_process_page().
 */
function sp123_omega_process_page(&$variables) {
  // You can use process hooks to modify the variables before they are passed to
  // the theme function or template file.

	if ($variables['node']->type == 'panopoly_landing_page') {
		unset($variables['title']); // Hide the node title before the node is getting rendered.
	}
}
