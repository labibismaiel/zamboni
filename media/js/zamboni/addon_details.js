/** Addons Display page */

/* general initialization */
$(document).ready(function() {

    // Personas are not impalacized yet!
    if ($("#persona[data-id]").length) {
        $(".addon .icon").click(function() {
            window.location.hash = "id=" + $("#persona").attr("data-id");
        })
    }

    if ($('#addon.primary').length == 0) return;

    var lb_baseurl = z.media_url+'img/jquery-lightbox/';
    $("a[rel='jquery-lightbox']").lightBox({
        overlayOpacity: 0.6,
        imageBlank: lb_baseurl+"lightbox-blank.gif",
        imageLoading: lb_baseurl+"lightbox-ico-loading.gif",
        imageBtnClose: lb_baseurl+"close.png",
        imageBtnPrev: lb_baseurl+"goleft.png",
        imageBtnNext: lb_baseurl+"goright.png",
        containerResizeSpeed: 350
    });

    var etiquette_box = $("#addons-display-review-etiquette").hide();
    $("#short-review").focus(function() { etiquette_box.show("fast"); } );

    /* No restart required box. (Only shown in Fx4+). */
    var no_restart = $('#addon-summary #no-restart');
    if (no_restart.length && z.browser.firefox
        && VersionCompare.compareVersions(z.browserVersion, '4.0a1') > 0) {
        no_restart.show();
    }
});
