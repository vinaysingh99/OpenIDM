/**
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2011-2012 ForgeRock AS. All rights reserved.
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * http://forgerock.org/license/CDDLv1.0.html
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * When distributing Covered Code, include this CDDL
 * Header Notice in each file and include the License file
 * at http://forgerock.org/license/CDDLv1.0.html
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 */

/*global $, define */

/**
 * @author jdabrowski
 */
define("org/forgerock/openidm/ui/admin/notifications/NotificationDelegate", [
    "org/forgerock/commons/ui/common/util/Constants",
    "org/forgerock/commons/ui/common/main/AbstractDelegate",
    "org/forgerock/commons/ui/common/main/Configuration",
    "org/forgerock/commons/ui/common/main/EventManager"
], function(constants, AbstractDelegate, configuration, eventManager) {

    var obj = new AbstractDelegate(constants.host + "/openidm/endpoint/usernotifications");

    obj.getNotificationsForUser = function(successCallback, errorCallback) {
        obj.serviceCall({
            url: "", 
            success: function (data) {
                if(successCallback) {
                    successCallback(data);
                }
            },
            error: errorCallback
        });
    };
    
    obj.deleteEntity = function(id, successCallback, errorCallback) {
        console.debug("delete entity");
        var callParams = {url: "?notificationId=" + id, type: "DELETE", success: successCallback, error: errorCallback };
        this.serviceCall(callParams);
    };

    return obj;
});



