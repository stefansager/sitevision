const utils = request.getAttribute("sitevision.utils");
const resourceLocatorUtil = require('ResourceLocatorUtil');
const portletContextUtil = require('PortletContextUtil');
const propertyUtil = require('PropertyUtil');
const landingPageUtil = require('LandingPageUtil');
const userFactory	= require('UserFactory');
const systemUserUtil = userFactory.getSystemUserUtil();
const linkRenderer = require('LinkRenderer');

const currentPage = portletContextUtil.getCurrentPage();
const currentUser	= portletContextUtil.getCurrentUser();
var param = 'redirect';
var value = propertyUtil.getString(currentPage, "URL", null);
var target = landingPageUtil.getLoginPage();
var text = scriptVariables.login;

if (!systemUserUtil.isAnonymous(currentUser)) {
	// User is signed in, present a log out link
	param = 'logout';
	value = 'true';
	target = currentPage;
	text = scriptVariables.logout;
}

linkRenderer.setTarget(target);
linkRenderer.setText(text);
linkRenderer.addTargetParameter(param, value);
linkRenderer.setFont(scriptVariables.font);