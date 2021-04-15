import { KeystoneUpdateProjectOption } from './KeystoneUpdateProjectOption';


export class KeystoneUpdateProjectRequestBody {
    public project: KeystoneUpdateProjectOption;
    public constructor(project?: any) { 
        this['project'] = project;
    }
    public withProject(project: KeystoneUpdateProjectOption): KeystoneUpdateProjectRequestBody {
        this['project'] = project;
        return this;
    }
}