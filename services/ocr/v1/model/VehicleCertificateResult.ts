

export class VehicleCertificateResult {
    private 'certificate_number'?: string;
    private 'issue_date'?: string;
    private 'manufacture_name'?: string;
    private 'vehicle_brand'?: string;
    private 'vehicle_name'?: string;
    private 'vehicle_model'?: string;
    public vin?: string;
    private 'vehicle_color'?: string;
    private 'chassis_model'?: string;
    private 'chassis_id'?: string;
    private 'chassis_certificate_number'?: string;
    private 'engine_model'?: string;
    private 'engine_number'?: string;
    private 'fuel_type'?: string;
    public displacement?: string;
    public power?: string;
    private 'emission_standard'?: string;
    private 'fuel_consumption'?: string;
    private 'overall_dimension_length'?: string;
    private 'overall_dimension_width'?: string;
    private 'overall_dimension_height'?: string;
    private 'container_dimension_length'?: string;
    private 'container_dimension_width'?: string;
    private 'container_dimension_height'?: string;
    private 'spring_quantity'?: string;
    private 'tire_quantity'?: string;
    private 'tire_size'?: string;
    private 'front_wheel_track'?: string;
    private 'rear_wheel_track'?: string;
    public wheelbase?: string;
    private 'axle_load'?: string;
    private 'axle_quantity'?: string;
    private 'steering_form'?: string;
    private 'total_weight'?: string;
    private 'equipment_weight'?: string;
    private 'maximum_laden_mass'?: string;
    private 'mass_utilization_coefficient'?: string;
    private 'traction_weight'?: string;
    private 'maximum_load_mass'?: string;
    private 'cab_passenger_capacity'?: string;
    private 'passenger_capacity'?: string;
    private 'max_design_speed'?: string;
    private 'manufacture_date'?: string;
    public confidence?: object;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withCertificateNumber(certificateNumber: string): VehicleCertificateResult {
        this['certificate_number'] = certificateNumber;
        return this;
    }
    public set certificateNumber(certificateNumber: string  | undefined) {
        this['certificate_number'] = certificateNumber;
    }
    public get certificateNumber(): string | undefined {
        return this['certificate_number'];
    }
    public withIssueDate(issueDate: string): VehicleCertificateResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withManufactureName(manufactureName: string): VehicleCertificateResult {
        this['manufacture_name'] = manufactureName;
        return this;
    }
    public set manufactureName(manufactureName: string  | undefined) {
        this['manufacture_name'] = manufactureName;
    }
    public get manufactureName(): string | undefined {
        return this['manufacture_name'];
    }
    public withVehicleBrand(vehicleBrand: string): VehicleCertificateResult {
        this['vehicle_brand'] = vehicleBrand;
        return this;
    }
    public set vehicleBrand(vehicleBrand: string  | undefined) {
        this['vehicle_brand'] = vehicleBrand;
    }
    public get vehicleBrand(): string | undefined {
        return this['vehicle_brand'];
    }
    public withVehicleName(vehicleName: string): VehicleCertificateResult {
        this['vehicle_name'] = vehicleName;
        return this;
    }
    public set vehicleName(vehicleName: string  | undefined) {
        this['vehicle_name'] = vehicleName;
    }
    public get vehicleName(): string | undefined {
        return this['vehicle_name'];
    }
    public withVehicleModel(vehicleModel: string): VehicleCertificateResult {
        this['vehicle_model'] = vehicleModel;
        return this;
    }
    public set vehicleModel(vehicleModel: string  | undefined) {
        this['vehicle_model'] = vehicleModel;
    }
    public get vehicleModel(): string | undefined {
        return this['vehicle_model'];
    }
    public withVin(vin: string): VehicleCertificateResult {
        this['vin'] = vin;
        return this;
    }
    public withVehicleColor(vehicleColor: string): VehicleCertificateResult {
        this['vehicle_color'] = vehicleColor;
        return this;
    }
    public set vehicleColor(vehicleColor: string  | undefined) {
        this['vehicle_color'] = vehicleColor;
    }
    public get vehicleColor(): string | undefined {
        return this['vehicle_color'];
    }
    public withChassisModel(chassisModel: string): VehicleCertificateResult {
        this['chassis_model'] = chassisModel;
        return this;
    }
    public set chassisModel(chassisModel: string  | undefined) {
        this['chassis_model'] = chassisModel;
    }
    public get chassisModel(): string | undefined {
        return this['chassis_model'];
    }
    public withChassisId(chassisId: string): VehicleCertificateResult {
        this['chassis_id'] = chassisId;
        return this;
    }
    public set chassisId(chassisId: string  | undefined) {
        this['chassis_id'] = chassisId;
    }
    public get chassisId(): string | undefined {
        return this['chassis_id'];
    }
    public withChassisCertificateNumber(chassisCertificateNumber: string): VehicleCertificateResult {
        this['chassis_certificate_number'] = chassisCertificateNumber;
        return this;
    }
    public set chassisCertificateNumber(chassisCertificateNumber: string  | undefined) {
        this['chassis_certificate_number'] = chassisCertificateNumber;
    }
    public get chassisCertificateNumber(): string | undefined {
        return this['chassis_certificate_number'];
    }
    public withEngineModel(engineModel: string): VehicleCertificateResult {
        this['engine_model'] = engineModel;
        return this;
    }
    public set engineModel(engineModel: string  | undefined) {
        this['engine_model'] = engineModel;
    }
    public get engineModel(): string | undefined {
        return this['engine_model'];
    }
    public withEngineNumber(engineNumber: string): VehicleCertificateResult {
        this['engine_number'] = engineNumber;
        return this;
    }
    public set engineNumber(engineNumber: string  | undefined) {
        this['engine_number'] = engineNumber;
    }
    public get engineNumber(): string | undefined {
        return this['engine_number'];
    }
    public withFuelType(fuelType: string): VehicleCertificateResult {
        this['fuel_type'] = fuelType;
        return this;
    }
    public set fuelType(fuelType: string  | undefined) {
        this['fuel_type'] = fuelType;
    }
    public get fuelType(): string | undefined {
        return this['fuel_type'];
    }
    public withDisplacement(displacement: string): VehicleCertificateResult {
        this['displacement'] = displacement;
        return this;
    }
    public withPower(power: string): VehicleCertificateResult {
        this['power'] = power;
        return this;
    }
    public withEmissionStandard(emissionStandard: string): VehicleCertificateResult {
        this['emission_standard'] = emissionStandard;
        return this;
    }
    public set emissionStandard(emissionStandard: string  | undefined) {
        this['emission_standard'] = emissionStandard;
    }
    public get emissionStandard(): string | undefined {
        return this['emission_standard'];
    }
    public withFuelConsumption(fuelConsumption: string): VehicleCertificateResult {
        this['fuel_consumption'] = fuelConsumption;
        return this;
    }
    public set fuelConsumption(fuelConsumption: string  | undefined) {
        this['fuel_consumption'] = fuelConsumption;
    }
    public get fuelConsumption(): string | undefined {
        return this['fuel_consumption'];
    }
    public withOverallDimensionLength(overallDimensionLength: string): VehicleCertificateResult {
        this['overall_dimension_length'] = overallDimensionLength;
        return this;
    }
    public set overallDimensionLength(overallDimensionLength: string  | undefined) {
        this['overall_dimension_length'] = overallDimensionLength;
    }
    public get overallDimensionLength(): string | undefined {
        return this['overall_dimension_length'];
    }
    public withOverallDimensionWidth(overallDimensionWidth: string): VehicleCertificateResult {
        this['overall_dimension_width'] = overallDimensionWidth;
        return this;
    }
    public set overallDimensionWidth(overallDimensionWidth: string  | undefined) {
        this['overall_dimension_width'] = overallDimensionWidth;
    }
    public get overallDimensionWidth(): string | undefined {
        return this['overall_dimension_width'];
    }
    public withOverallDimensionHeight(overallDimensionHeight: string): VehicleCertificateResult {
        this['overall_dimension_height'] = overallDimensionHeight;
        return this;
    }
    public set overallDimensionHeight(overallDimensionHeight: string  | undefined) {
        this['overall_dimension_height'] = overallDimensionHeight;
    }
    public get overallDimensionHeight(): string | undefined {
        return this['overall_dimension_height'];
    }
    public withContainerDimensionLength(containerDimensionLength: string): VehicleCertificateResult {
        this['container_dimension_length'] = containerDimensionLength;
        return this;
    }
    public set containerDimensionLength(containerDimensionLength: string  | undefined) {
        this['container_dimension_length'] = containerDimensionLength;
    }
    public get containerDimensionLength(): string | undefined {
        return this['container_dimension_length'];
    }
    public withContainerDimensionWidth(containerDimensionWidth: string): VehicleCertificateResult {
        this['container_dimension_width'] = containerDimensionWidth;
        return this;
    }
    public set containerDimensionWidth(containerDimensionWidth: string  | undefined) {
        this['container_dimension_width'] = containerDimensionWidth;
    }
    public get containerDimensionWidth(): string | undefined {
        return this['container_dimension_width'];
    }
    public withContainerDimensionHeight(containerDimensionHeight: string): VehicleCertificateResult {
        this['container_dimension_height'] = containerDimensionHeight;
        return this;
    }
    public set containerDimensionHeight(containerDimensionHeight: string  | undefined) {
        this['container_dimension_height'] = containerDimensionHeight;
    }
    public get containerDimensionHeight(): string | undefined {
        return this['container_dimension_height'];
    }
    public withSpringQuantity(springQuantity: string): VehicleCertificateResult {
        this['spring_quantity'] = springQuantity;
        return this;
    }
    public set springQuantity(springQuantity: string  | undefined) {
        this['spring_quantity'] = springQuantity;
    }
    public get springQuantity(): string | undefined {
        return this['spring_quantity'];
    }
    public withTireQuantity(tireQuantity: string): VehicleCertificateResult {
        this['tire_quantity'] = tireQuantity;
        return this;
    }
    public set tireQuantity(tireQuantity: string  | undefined) {
        this['tire_quantity'] = tireQuantity;
    }
    public get tireQuantity(): string | undefined {
        return this['tire_quantity'];
    }
    public withTireSize(tireSize: string): VehicleCertificateResult {
        this['tire_size'] = tireSize;
        return this;
    }
    public set tireSize(tireSize: string  | undefined) {
        this['tire_size'] = tireSize;
    }
    public get tireSize(): string | undefined {
        return this['tire_size'];
    }
    public withFrontWheelTrack(frontWheelTrack: string): VehicleCertificateResult {
        this['front_wheel_track'] = frontWheelTrack;
        return this;
    }
    public set frontWheelTrack(frontWheelTrack: string  | undefined) {
        this['front_wheel_track'] = frontWheelTrack;
    }
    public get frontWheelTrack(): string | undefined {
        return this['front_wheel_track'];
    }
    public withRearWheelTrack(rearWheelTrack: string): VehicleCertificateResult {
        this['rear_wheel_track'] = rearWheelTrack;
        return this;
    }
    public set rearWheelTrack(rearWheelTrack: string  | undefined) {
        this['rear_wheel_track'] = rearWheelTrack;
    }
    public get rearWheelTrack(): string | undefined {
        return this['rear_wheel_track'];
    }
    public withWheelbase(wheelbase: string): VehicleCertificateResult {
        this['wheelbase'] = wheelbase;
        return this;
    }
    public withAxleLoad(axleLoad: string): VehicleCertificateResult {
        this['axle_load'] = axleLoad;
        return this;
    }
    public set axleLoad(axleLoad: string  | undefined) {
        this['axle_load'] = axleLoad;
    }
    public get axleLoad(): string | undefined {
        return this['axle_load'];
    }
    public withAxleQuantity(axleQuantity: string): VehicleCertificateResult {
        this['axle_quantity'] = axleQuantity;
        return this;
    }
    public set axleQuantity(axleQuantity: string  | undefined) {
        this['axle_quantity'] = axleQuantity;
    }
    public get axleQuantity(): string | undefined {
        return this['axle_quantity'];
    }
    public withSteeringForm(steeringForm: string): VehicleCertificateResult {
        this['steering_form'] = steeringForm;
        return this;
    }
    public set steeringForm(steeringForm: string  | undefined) {
        this['steering_form'] = steeringForm;
    }
    public get steeringForm(): string | undefined {
        return this['steering_form'];
    }
    public withTotalWeight(totalWeight: string): VehicleCertificateResult {
        this['total_weight'] = totalWeight;
        return this;
    }
    public set totalWeight(totalWeight: string  | undefined) {
        this['total_weight'] = totalWeight;
    }
    public get totalWeight(): string | undefined {
        return this['total_weight'];
    }
    public withEquipmentWeight(equipmentWeight: string): VehicleCertificateResult {
        this['equipment_weight'] = equipmentWeight;
        return this;
    }
    public set equipmentWeight(equipmentWeight: string  | undefined) {
        this['equipment_weight'] = equipmentWeight;
    }
    public get equipmentWeight(): string | undefined {
        return this['equipment_weight'];
    }
    public withMaximumLadenMass(maximumLadenMass: string): VehicleCertificateResult {
        this['maximum_laden_mass'] = maximumLadenMass;
        return this;
    }
    public set maximumLadenMass(maximumLadenMass: string  | undefined) {
        this['maximum_laden_mass'] = maximumLadenMass;
    }
    public get maximumLadenMass(): string | undefined {
        return this['maximum_laden_mass'];
    }
    public withMassUtilizationCoefficient(massUtilizationCoefficient: string): VehicleCertificateResult {
        this['mass_utilization_coefficient'] = massUtilizationCoefficient;
        return this;
    }
    public set massUtilizationCoefficient(massUtilizationCoefficient: string  | undefined) {
        this['mass_utilization_coefficient'] = massUtilizationCoefficient;
    }
    public get massUtilizationCoefficient(): string | undefined {
        return this['mass_utilization_coefficient'];
    }
    public withTractionWeight(tractionWeight: string): VehicleCertificateResult {
        this['traction_weight'] = tractionWeight;
        return this;
    }
    public set tractionWeight(tractionWeight: string  | undefined) {
        this['traction_weight'] = tractionWeight;
    }
    public get tractionWeight(): string | undefined {
        return this['traction_weight'];
    }
    public withMaximumLoadMass(maximumLoadMass: string): VehicleCertificateResult {
        this['maximum_load_mass'] = maximumLoadMass;
        return this;
    }
    public set maximumLoadMass(maximumLoadMass: string  | undefined) {
        this['maximum_load_mass'] = maximumLoadMass;
    }
    public get maximumLoadMass(): string | undefined {
        return this['maximum_load_mass'];
    }
    public withCabPassengerCapacity(cabPassengerCapacity: string): VehicleCertificateResult {
        this['cab_passenger_capacity'] = cabPassengerCapacity;
        return this;
    }
    public set cabPassengerCapacity(cabPassengerCapacity: string  | undefined) {
        this['cab_passenger_capacity'] = cabPassengerCapacity;
    }
    public get cabPassengerCapacity(): string | undefined {
        return this['cab_passenger_capacity'];
    }
    public withPassengerCapacity(passengerCapacity: string): VehicleCertificateResult {
        this['passenger_capacity'] = passengerCapacity;
        return this;
    }
    public set passengerCapacity(passengerCapacity: string  | undefined) {
        this['passenger_capacity'] = passengerCapacity;
    }
    public get passengerCapacity(): string | undefined {
        return this['passenger_capacity'];
    }
    public withMaxDesignSpeed(maxDesignSpeed: string): VehicleCertificateResult {
        this['max_design_speed'] = maxDesignSpeed;
        return this;
    }
    public set maxDesignSpeed(maxDesignSpeed: string  | undefined) {
        this['max_design_speed'] = maxDesignSpeed;
    }
    public get maxDesignSpeed(): string | undefined {
        return this['max_design_speed'];
    }
    public withManufactureDate(manufactureDate: string): VehicleCertificateResult {
        this['manufacture_date'] = manufactureDate;
        return this;
    }
    public set manufactureDate(manufactureDate: string  | undefined) {
        this['manufacture_date'] = manufactureDate;
    }
    public get manufactureDate(): string | undefined {
        return this['manufacture_date'];
    }
    public withConfidence(confidence: object): VehicleCertificateResult {
        this['confidence'] = confidence;
        return this;
    }
    public withTextLocation(textLocation: object): VehicleCertificateResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
}