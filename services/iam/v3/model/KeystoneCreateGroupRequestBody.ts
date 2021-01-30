import { KeystoneCreateGroupOption } from './KeystoneCreateGroupOption';


export class KeystoneCreateGroupRequestBody {
    public group: KeystoneCreateGroupOption;
    public constructor(group: any) { 
        this['group'] = group;
    }
    public withGroup(group: KeystoneCreateGroupOption): KeystoneCreateGroupRequestBody {
        this['group'] = group;
        return this;
    }
}