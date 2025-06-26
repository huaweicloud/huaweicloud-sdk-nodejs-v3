import { EnableControlParameters } from './EnableControlParameters';


export class ControlOperateReqBody {
    public identifier?: string;
    private 'target_identifier'?: string;
    public parameters?: Array<EnableControlParameters>;
    public constructor(identifier?: string, targetIdentifier?: string) { 
        this['identifier'] = identifier;
        this['target_identifier'] = targetIdentifier;
    }
    public withIdentifier(identifier: string): ControlOperateReqBody {
        this['identifier'] = identifier;
        return this;
    }
    public withTargetIdentifier(targetIdentifier: string): ControlOperateReqBody {
        this['target_identifier'] = targetIdentifier;
        return this;
    }
    public set targetIdentifier(targetIdentifier: string  | undefined) {
        this['target_identifier'] = targetIdentifier;
    }
    public get targetIdentifier(): string | undefined {
        return this['target_identifier'];
    }
    public withParameters(parameters: Array<EnableControlParameters>): ControlOperateReqBody {
        this['parameters'] = parameters;
        return this;
    }
}