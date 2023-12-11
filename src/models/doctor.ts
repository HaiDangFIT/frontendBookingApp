export interface Doctor {
    totalRatings: number;
    _id: {
        _id: string;
        fullName: string;
        email: string;
        password: string;
        mobile: string;
        role: number;
        address: string;
        isBlocked: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
        gender: string;
    };
    clinicID: {
        address: {
        province: string;
        district: string;
        ward: string;
        detail: string;
        };
        _id: string;
        name: string;
        image: string;
        description: string;
    };
    description: string;
    specialtyID: {
        _id: string;
        name: string;
    };
    position: string;
    schedules: any[]; // Thay thế any bằng loại dữ liệu chính xác cho mảng schedules nếu có
    }
