import { KeystoneCreateProjectOption } from './KeystoneCreateProjectOption';


export class KeystoneCreateProjectRequestBody {
    public project?: KeystoneCreateProjectOption;
    public constructor(project?: KeystoneCreateProjectOption) { 
        this['project'] = project;
    }
    public withProject(project: KeystoneCreateProjectOption): KeystoneCreateProjectRequestBody {
        this['project'] = project;
        return this;
    }
}