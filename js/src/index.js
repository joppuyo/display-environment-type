/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { render } from "@wordpress/element";
import { subscribe, select } from "@wordpress/data";
import domReady from "@wordpress/dom-ready";

/**
 * Internal dependencies.
 */
import BlockEditorEnvironmentBadge from "./block-editor-environment-badge";

/**
 * Let's subscribe (because I finally understand what this does better)
 * and add the component to the toolbar!
 */
subscribe(() => {

    const isFullscreenMode = select( 'core/edit-post' ) ? select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ) : false;

    const quickpostbutton = document.querySelector(
        "#block-editor-environment-badge"
    );

    if (!isFullscreenMode && quickpostbutton) {
        quickpostbutton.remove();
    }

    // If the Quick Post Button already exists, skip render
    if (quickpostbutton || !isFullscreenMode) {
        return;
    }

    domReady(() => {
        const editorToolbar = document.querySelector(
            ".edit-post-header__toolbar"
        );

        // If toolbar doesn't exist, we can't continue
        if (!editorToolbar) {
            return;
        }

        // So turns out you can't append to an existing container without
        // using dangerouslySetInnerHTML, which..I don't want to use.
        const buttonWrapper = document.createElement("div");
        buttonWrapper.id = "block-editor-environment-badge";
        buttonWrapper.style.cssText = "display:flex;";

        // add empty div to the toolbar so we can fill it.
        editorToolbar.appendChild(buttonWrapper);

        render(
            <BlockEditorEnvironmentBadge />,
            document.getElementById("block-editor-environment-badge")
        );
    });
});