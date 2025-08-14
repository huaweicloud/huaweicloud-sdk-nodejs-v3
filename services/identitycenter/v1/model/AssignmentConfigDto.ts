

export class AssignmentConfigDto {
    private 'assignment_required'?: boolean;
    public constructor(assignmentRequired?: boolean) { 
        this['assignment_required'] = assignmentRequired;
    }
    public withAssignmentRequired(assignmentRequired: boolean): AssignmentConfigDto {
        this['assignment_required'] = assignmentRequired;
        return this;
    }
    public set assignmentRequired(assignmentRequired: boolean  | undefined) {
        this['assignment_required'] = assignmentRequired;
    }
    public get assignmentRequired(): boolean | undefined {
        return this['assignment_required'];
    }
}