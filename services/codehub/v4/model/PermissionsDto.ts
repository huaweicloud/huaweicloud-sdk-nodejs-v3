import { MemberAccess } from './MemberAccess';


export class PermissionsDto {
    private 'repository_access'?: MemberAccess;
    private 'group_access'?: MemberAccess;
    public constructor() { 
    }
    public withRepositoryAccess(repositoryAccess: MemberAccess): PermissionsDto {
        this['repository_access'] = repositoryAccess;
        return this;
    }
    public set repositoryAccess(repositoryAccess: MemberAccess  | undefined) {
        this['repository_access'] = repositoryAccess;
    }
    public get repositoryAccess(): MemberAccess | undefined {
        return this['repository_access'];
    }
    public withGroupAccess(groupAccess: MemberAccess): PermissionsDto {
        this['group_access'] = groupAccess;
        return this;
    }
    public set groupAccess(groupAccess: MemberAccess  | undefined) {
        this['group_access'] = groupAccess;
    }
    public get groupAccess(): MemberAccess | undefined {
        return this['group_access'];
    }
}