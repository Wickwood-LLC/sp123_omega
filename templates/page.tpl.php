<header id="header">
  <div class="header-inner">
    <?php print render($page['header']); ?>
    <?php print render($page['navigation']); ?>
  </div>

  <?php if (!empty($breadcrumb)): ?>
    <div id='branding'><div class='limiter clearfix'>  
      <?php if ((arg(0) == 'user' && arg(1) == 'login') || (arg(0) == 'user' && arg(1) == 'password')): ?>
        <div class='breadcrumb clearfix'></div>
      <?php else: ?>
        <div class='breadcrumb clearfix'><?php print $breadcrumb ?></div>
      <?php endif; ?>
    
      <?php if (!$overlay && isset($secondary_menu)) : ?>
        <?php print theme('links', array('links' => $secondary_menu, 'attributes' => array('class' => 'links secondary-menu'))) ?>
      <?php endif; ?>
    </div></div>
  <?php endif; ?>
</header>

<div id='page-title'>
  <div class='limiter clearfix'>
    <div class='tabs clearfix'>
      <?php if ($tabs): ?>
        <ul class='primary-tabs links clearfix'><?php print render($tabs) ?></ul>
      <?php endif; ?>
    </div>
  </div>
  <?php print render($title_prefix); ?>
  <?php if (!empty($page_icon_class)): ?><span class='icon'></span><?php endif; ?>
  <?php if (arg(0) == 'user' && arg(1) == 'login') : ?>
    <h1 class="page-title <?php print $page_icon_class ?>"> Log In to <?php print strip_tags($site_name); ?> </h1>
  <?php elseif (arg(0) == 'user' && arg(1) == 'password') : ?>
    <h1 class="page-title <?php print $page_icon_class ?>"> Reset Your <?php print strip_tags($site_name); ?> Password </h1>
  <?php else : ?>
    <h1 class='page-title <?php print $page_icon_class ?>'><?php print $title ?></h1>
  <?php endif ; ?>
  <?php if ($action_links): ?>
    <ul class='action-links links clearfix'><?php print render($action_links) ?></ul>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
</div>

<?php if ($show_messages && $messages): ?>
  <div id='console'><div class='limiter clearfix'><?php print $messages; ?></div></div>
<?php endif; ?>

<main id="page">
  <div id='main-content' class='limiter clearfix'>
    <?php if ($page['help']) print render($page['help']) ?>
    <div id='content' class='page-content clearfix'>
      <?php if (!empty($page['content'])) print render($page['content']) ?>
    </div>
  </div>
</main>

<footer id='footer' class='clearfix'>
  <div class="footer-inner">
    <?php print render($page['footer']); ?>
  </div>
</footer>