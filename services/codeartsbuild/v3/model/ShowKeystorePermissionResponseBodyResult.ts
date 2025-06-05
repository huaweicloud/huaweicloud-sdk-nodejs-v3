import { AddKeystorePermissionResponseBody } from './AddKeystorePermissionResponseBody';


export class ShowKeystorePermissionResponseBodyResult {
    public total?: number;
    private 'permission_list'?: Array<AddKeystorePermissionResponseBody>;
    public constructor() { 
    }
    public withTotal(total: number): ShowKeystorePermissionResponseBodyResult {
        this['total'] = total;
        return this;
    }
    public withPermissionList(permissionList: Array<AddKeystorePermissionResponseBody>): ShowKeystorePermissionResponseBodyResult {
        this['permission_list'] = permissionList;
        return this;
    }
    public set permissionList(permissionList: Array<AddKeystorePermissionResponseBody>  | undefined) {
        this['permission_list'] = permissionList;
    }
    public get permissionList(): Array<AddKeystorePermissionResponseBody> | undefined {
        return this['permission_list'];
    }
}