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

/* Moving checkbox inputs inside their labels */
// function sp123_omega_form_element($variables) {
//   $element = &$variables['element'];

//   // This function is invoked as theme wrapper, but the rendered form element
//   // may not necessarily have been processed by form_builder().
//   $element += array(
//     '#title_display' => 'before',
//   );

//   // Add element #id for #type 'item'.
//   if (isset($element['#markup']) && !empty($element['#id'])) {
//     $attributes['id'] = $element['#id'];
//   }
//   // Add element's #type and #name as class to aid with JS/CSS selectors.
//   $attributes['class'] = array('form-item');
//   if (!empty($element['#type'])) {
//     $attributes['class'][] = 'form-type-' . strtr($element['#type'], '_', '-');
//   }
//   if (!empty($element['#name'])) {
//     $attributes['class'][] = 'form-item-' . strtr($element['#name'], array(' ' => '-', '_' => '-', '[' => '-', ']' => ''));
//   }
//   // Add a class for disabled elements to facilitate cross-browser styling.
//   if (!empty($element['#attributes']['disabled'])) {
//     $attributes['class'][] = 'form-disabled';
//   }
//   $output = '<div' . drupal_attributes($attributes) . '>' . "\n";

//   // If #title is not set, we don't display any label or required marker.
//   if (!isset($element['#title'])) {
//     $element['#title_display'] = 'none';
//   }
//   $prefix = isset($element['#field_prefix']) ? '<span class="field-prefix">' . $element['#field_prefix'] . '</span> ' : '';
//   $suffix = isset($element['#field_suffix']) ? ' <span class="field-suffix">' . $element['#field_suffix'] . '</span>' : '';

//   if ($element['#type'] == 'checkbox') {
// 	  $variables['rendered_element'] = ' ' . $prefix . $element['#children'] . $suffix . "\n";
// 	  $output .= theme('form_element_label', $variables);
// 	}
// 	else {
// 	  switch ($element['#title_display']) {
// 	    case 'before':
// 	    case 'invisible':
// 	      $output .= ' ' . theme('form_element_label', $variables);
// 	      $output .= ' ' . $prefix . $element['#children'] . $suffix . "\n";
// 	      break;

// 	    case 'after':
// 	      $output .= ' ' . $prefix . $element['#children'] . $suffix;
// 	      $output .= ' ' . theme('form_element_label', $variables) . "\n";
// 	      break;

// 	    case 'none':
// 	    case 'attribute':
// 	      // Output no label and no required marker, only the children.
// 	      $output .= ' ' . $prefix . $element['#children'] . $suffix . "\n";
// 	      break;
// 	  }
// 	}


//   if (!empty($element['#description'])) {
//     $output .= '<div class="description">' . $element['#description'] . "</div>\n";
//   }

//   $output .= "</div>\n";

//   return $output;
// }

// function sp123_omega_form_element_label($variables) {
//   $element = $variables['element'];
//   // This is also used in the installer, pre-database setup.
//   $t = get_t();

//   // If title and required marker are both empty, output no label.
//   if ((!isset($element['#title']) || $element['#title'] === '') && empty($element['#required'])) {
//     return '';
//   }

//   // If the element is required, a required marker is appended to the label.
//   $required = !empty($element['#required']) ? theme('form_required_marker', array('element' => $element)) : '';

//   $title = filter_xss_admin($element['#title']);

//   $attributes = array();
//   // Style the label as class option to display inline with the element.
//   if ($element['#title_display'] == 'after') {
//     $attributes['class'] = 'option';
//   }
//   // Show label only to screen readers to avoid disruption in visual flows.
//   elseif ($element['#title_display'] == 'invisible') {
//     $attributes['class'] = 'element-invisible';
//   }

//   if (!empty($element['#id'])) {
//     $attributes['for'] = $element['#id'];
//   }

//   if ($element['#type'] == 'checkbox') {
// 	  $attributes['class'] = 'checkbox';
// 	}

// 	// The leading whitespace helps visually separate fields from inline labels.
// 	if (!empty($variables['rendered_element'])) {
// 	  return ' <label' . drupal_attributes($attributes) . '>' . $variables['rendered_element'] . $t('!title !required', array('!title' => $title, '!required' => $required)) . "</label>\n";
// 	}
// 	else {
// 	  return ' <label' . drupal_attributes($attributes) . '>' . $t('!title !required', array('!title' => $title, '!required' => $required)) . "</label>\n";
// 	}
// }

