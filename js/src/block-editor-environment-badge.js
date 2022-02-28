/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";
import { ToolbarButton, Icon, Dashicon } from "@wordpress/components";
import { addQueryArgs } from "@wordpress/url";

/**
 * Create the Quick Post Button we will add to the Block Editor Toolbar
 *
 * @since 0.1.0
 * @return {string} Return the rendered Quick Post Button
 */
function BlockEditorEnvironmentBadge({ postType, newPost, addNewLabel, singleLabel }) {
    return (
        <div
            id="block-editor-environment-badge"
            style={{
                textTransform: "capitalize",
                marginLeft: "1em",
                marginRight: "1em",
                maxHeight: "36px",
                minHeight: "36px",
                display: "flex",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                justifyContent: "center",
                alignItems: "center",
                padding: "6px 12px",
                color: "black",
                borderRadius: "2px",
            }}
        >
            <Dashicon
                style={{"color": "#007cba", marginRight: "0.5rem"}}
                icon="lightbulb"
            />
			<span>
                Local
			</span>
        </div>
    );
}

export default BlockEditorEnvironmentBadge;