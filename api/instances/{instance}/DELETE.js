
import {instance} from '🔗';

if (instance.get().mapping){
    ({error: 'Instances with domain mappings may not be deleted.'});
}

instance.get().remove();

({success: 'Deleted'});