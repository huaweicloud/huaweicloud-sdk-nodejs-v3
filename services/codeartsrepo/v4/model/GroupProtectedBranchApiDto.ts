import { ProjectProtectedActionResultApiDto } from './ProjectProtectedActionResultApiDto';
import { ProjectProtectedBranchApiDto } from './ProjectProtectedBranchApiDto';


export class GroupProtectedBranchApiDto {
    public id?: number;
    public name?: string;
    public actions?: Array<ProjectProtectedActionResultApiDto>;
    private 'namespace_id'?: number;
    public constructor() { 
    }
    public withId(id: number): GroupProtectedBranchApiDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GroupProtectedBranchApiDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedActionResultApiDto>): GroupProtectedBranchApiDto {
        this['actions'] = actions;
        return this;
    }
    public withNamespaceId(namespaceId: number): GroupProtectedBranchApiDto {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
}