<?php

/**
 * Implements hook_preprocess_page().
 */
function sp123_omega_preprocess_page(&$variables) {
	if ($variables['node']->type == 'panopoly_landing_page') {
		unset($variables['title']); // Hide the node title before the node is getting rendered.
	}
}
