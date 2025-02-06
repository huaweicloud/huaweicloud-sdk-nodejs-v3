import { ManagerDto } from './ManagerDto';


export class EnterpriseDto {
    private 'cost_center'?: string;
    public department?: string;
    public division?: string;
    private 'employee_number'?: string;
    public manager?: ManagerDto;
    public organization?: string;
    public constructor() { 
    }
    public withCostCenter(costCenter: string): EnterpriseDto {
        this['cost_center'] = costCenter;
        return this;
    }
    public set costCenter(costCenter: string  | undefined) {
        this['cost_center'] = costCenter;
    }
    public get costCenter(): string | undefined {
        return this['cost_center'];
    }
    public withDepartment(department: string): EnterpriseDto {
        this['department'] = department;
        return this;
    }
    public withDivision(division: string): EnterpriseDto {
        this['division'] = division;
        return this;
    }
    public withEmployeeNumber(employeeNumber: string): EnterpriseDto {
        this['employee_number'] = employeeNumber;
        return this;
    }
    public set employeeNumber(employeeNumber: string  | undefined) {
        this['employee_number'] = employeeNumber;
    }
    public get employeeNumber(): string | undefined {
        return this['employee_number'];
    }
    public withManager(manager: ManagerDto): EnterpriseDto {
        this['manager'] = manager;
        return this;
    }
    public withOrganization(organization: string): EnterpriseDto {
        this['organization'] = organization;
        return this;
    }
}