import { RequirementOverviewVo } from './RequirementOverviewVo';


export class RequirementsOverviewVo {
    private 'total_number'?: number;
    private 'requirement_overview_list'?: Array<RequirementOverviewVo>;
    public constructor() { 
    }
    public withTotalNumber(totalNumber: number): RequirementsOverviewVo {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withRequirementOverviewList(requirementOverviewList: Array<RequirementOverviewVo>): RequirementsOverviewVo {
        this['requirement_overview_list'] = requirementOverviewList;
        return this;
    }
    public set requirementOverviewList(requirementOverviewList: Array<RequirementOverviewVo>  | undefined) {
        this['requirement_overview_list'] = requirementOverviewList;
    }
    public get requirementOverviewList(): Array<RequirementOverviewVo> | undefined {
        return this['requirement_overview_list'];
    }
}