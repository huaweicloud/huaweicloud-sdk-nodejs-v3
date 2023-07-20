import { KeystoneUpdateProjectOption } from './KeystoneUpdateProjectOption';


export class KeystoneUpdateProjectRequestBody {
    public project?: KeystoneUpdateProjectOption;
    public constructor(project?: KeystoneUpdateProjectOption) { 
        this['project'] = project;
    }
    public withProject(project: KeystoneUpdateProjectOption): KeystoneUpdateProjectRequestBody {
        this['project'] = project;
        return this;
    }
}