import { AttachDesktopPoolsInfo } from './AttachDesktopPoolsInfo';


export class ShowDesktopPoolListByUsersInfo {
    private 'user_id'?: string;
    private 'desktop_pool_count'?: number;
    private 'desktop_pools'?: Array<AttachDesktopPoolsInfo>;
    public constructor() { 
    }
    public withUserId(userId: string): ShowDesktopPoolListByUsersInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDesktopPoolCount(desktopPoolCount: number): ShowDesktopPoolListByUsersInfo {
        this['desktop_pool_count'] = desktopPoolCount;
        return this;
    }
    public set desktopPoolCount(desktopPoolCount: number  | undefined) {
        this['desktop_pool_count'] = desktopPoolCount;
    }
    public get desktopPoolCount(): number | undefined {
        return this['desktop_pool_count'];
    }
    public withDesktopPools(desktopPools: Array<AttachDesktopPoolsInfo>): ShowDesktopPoolListByUsersInfo {
        this['desktop_pools'] = desktopPools;
        return this;
    }
    public set desktopPools(desktopPools: Array<AttachDesktopPoolsInfo>  | undefined) {
        this['desktop_pools'] = desktopPools;
    }
    public get desktopPools(): Array<AttachDesktopPoolsInfo> | undefined {
        return this['desktop_pools'];
    }
}