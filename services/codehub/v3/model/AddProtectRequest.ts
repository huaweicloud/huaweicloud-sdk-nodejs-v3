import { AddProtectAccessLevel } from './AddProtectAccessLevel';


export class AddProtectRequest {
    private 'access_level'?: AddProtectAccessLevel;
    public constructor(accessLevel?: AddProtectAccessLevel) { 
        this['access_level'] = accessLevel;
    }
    public withAccessLevel(accessLevel: AddProtectAccessLevel): AddProtectRequest {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: AddProtectAccessLevel  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): AddProtectAccessLevel | undefined {
        return this['access_level'];
    }
}