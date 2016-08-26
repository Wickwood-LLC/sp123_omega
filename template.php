<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * SP123 Omega theme.
 */

function sp123_omega_preprocess_page(&$variables) {
	if ($variables['node']->type == 'panopoly_landing_page') {
		$variables['title'] = NULL; // Hide the node title before the node is getting rendered.
	}
}
