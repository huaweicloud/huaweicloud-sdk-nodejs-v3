import { FailedReasonsCREATEFAILED } from './FailedReasonsCREATEFAILED';


export class FailedReasons {
    private 'CREATE_FAILED'?: FailedReasonsCREATEFAILED;
    public constructor() { 
    }
    public withCreateFailed(createFailed: FailedReasonsCREATEFAILED): FailedReasons {
        this['CREATE_FAILED'] = createFailed;
        return this;
    }
    public set createFailed(createFailed: FailedReasonsCREATEFAILED  | undefined) {
        this['CREATE_FAILED'] = createFailed;
    }
    public get createFailed(): FailedReasonsCREATEFAILED | undefined {
        return this['CREATE_FAILED'];
    }
}