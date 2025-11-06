import { ProtectedActionBasicApiDto } from './ProtectedActionBasicApiDto';


export class ProtectedBranchBodyApiDto {
    public name?: string;
    public actions?: Array<ProtectedActionBasicApiDto>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ProtectedBranchBodyApiDto {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProtectedActionBasicApiDto>): ProtectedBranchBodyApiDto {
        this['actions'] = actions;
        return this;
    }
}