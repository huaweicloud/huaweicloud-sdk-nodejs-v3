import { KeystoneUpdateGroupOption } from './KeystoneUpdateGroupOption';


export class KeystoneUpdateGroupRequestBody {
    public group: KeystoneUpdateGroupOption;
    public constructor(group?: any) { 
        this['group'] = group;
    }
    public withGroup(group: KeystoneUpdateGroupOption): KeystoneUpdateGroupRequestBody {
        this['group'] = group;
        return this;
    }
}