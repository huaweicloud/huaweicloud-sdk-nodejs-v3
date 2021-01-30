import { UpdateProjectOption } from './UpdateProjectOption';


export class UpdateProjectStatusRequestBody {
    public project: UpdateProjectOption;
    public constructor(project: any) { 
        this['project'] = project;
    }
    public withProject(project: UpdateProjectOption): UpdateProjectStatusRequestBody {
        this['project'] = project;
        return this;
    }
}