/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
 */
import { library } from "@fortawesome/fontawesome-svg-core";

/**
 * 2) Then you have to import every icon that you will use
 */
import { faClock } from "@fortawesome/free-regular-svg-icons";

/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
 
fontawesome.config = {
	autoReplaceSvg: "nest"
};*/

/**
 * 4) Add the icons into the font-awesome library
 */
library.add(faClock);

/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
 */
