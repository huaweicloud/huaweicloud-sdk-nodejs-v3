import { KeystoneUpdateGroupOption } from './KeystoneUpdateGroupOption';


export class KeystoneUpdateGroupRequestBody {
    public group?: KeystoneUpdateGroupOption;
    public constructor(group?: KeystoneUpdateGroupOption) { 
        this['group'] = group;
    }
    public withGroup(group: KeystoneUpdateGroupOption): KeystoneUpdateGroupRequestBody {
        this['group'] = group;
        return this;
    }
}