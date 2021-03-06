/// <reference path='ref/VSS.d.ts' />

var showCommitsMenu = (function () {
    "use strict";
    return <IContributedMenuSource>{
        execute: function (actionContext: any): void {
            // Get the Web Context to create the uri to navigate to
            var vsoContext = VSS.getWebContext();

            // Navigate to the new View Associated Work Items hub.  fabrikam.build is the namespace of the app and build.items is the id of the hub.
            window.parent.location.href = vsoContext.host.uri + "/" + vsoContext.project.name + "/_apps/hub/" + VSS.getExtensionContext().namespace + "/build.items?buildUri=" + actionContext.uri;
        }
    };
}());

VSS.register("showCommits", showCommitsMenu);