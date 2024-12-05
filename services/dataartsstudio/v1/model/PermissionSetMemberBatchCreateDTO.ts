import { PermissionSetMemberCreateDTO2 } from './PermissionSetMemberCreateDTO2';


export class PermissionSetMemberBatchCreateDTO {
    public members?: Array<PermissionSetMemberCreateDTO2>;
    private 'auto_sync'?: boolean;
    public constructor() { 
    }
    public withMembers(members: Array<PermissionSetMemberCreateDTO2>): PermissionSetMemberBatchCreateDTO {
        this['members'] = members;
        return this;
    }
    public withAutoSync(autoSync: boolean): PermissionSetMemberBatchCreateDTO {
        this['auto_sync'] = autoSync;
        return this;
    }
    public set autoSync(autoSync: boolean  | undefined) {
        this['auto_sync'] = autoSync;
    }
    public get autoSync(): boolean | undefined {
        return this['auto_sync'];
    }
}