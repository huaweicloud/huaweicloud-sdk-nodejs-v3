import { UCSStatusViolation } from './UCSStatusViolation';


export class UCSConstraintStatus {
    public violations?: Array<UCSStatusViolation>;
    public constructor() { 
    }
    public withViolations(violations: Array<UCSStatusViolation>): UCSConstraintStatus {
        this['violations'] = violations;
        return this;
    }
}