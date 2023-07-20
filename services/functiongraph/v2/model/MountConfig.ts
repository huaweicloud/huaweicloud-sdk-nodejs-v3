import { FuncMount } from './FuncMount';
import { MountUser } from './MountUser';


export class MountConfig {
    private 'mount_user'?: MountUser;
    private 'func_mounts'?: Array<FuncMount>;
    public constructor(mountUser?: MountUser, funcMounts?: Array<FuncMount>) { 
        this['mount_user'] = mountUser;
        this['func_mounts'] = funcMounts;
    }
    public withMountUser(mountUser: MountUser): MountConfig {
        this['mount_user'] = mountUser;
        return this;
    }
    public set mountUser(mountUser: MountUser  | undefined) {
        this['mount_user'] = mountUser;
    }
    public get mountUser(): MountUser | undefined {
        return this['mount_user'];
    }
    public withFuncMounts(funcMounts: Array<FuncMount>): MountConfig {
        this['func_mounts'] = funcMounts;
        return this;
    }
    public set funcMounts(funcMounts: Array<FuncMount>  | undefined) {
        this['func_mounts'] = funcMounts;
    }
    public get funcMounts(): Array<FuncMount> | undefined {
        return this['func_mounts'];
    }
}