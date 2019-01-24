
import {identityType, clientId, secret, context} from "form";
import {ProjectKey} from '📦';

if (identityType != 'github' && identityType != 'google'){
    throw ({field:'identityType', error: 'Invalid user identity type.'});
}

let pk = new ProjectKey().type('user').name(identityType);

if (context == 'test' || context == 'live') pk.context(context);

pk.data().put('clientId', clientId)
pk.data().put('secret', secret);

({redirect: '.', success:'New project key created'});

