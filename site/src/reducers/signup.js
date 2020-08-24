let signupForm = {
    Login_Email: "",
    Login_Password: "",
    Login_Password_Re: "",
    Brand_Name_DBA: "",
    Online_Store_Website: "",
    Business_Owner_Email: "",
    Federal_Tax_Classification: "",
    Tax_Identification_Number: "",
    Legal_Name_Company: "",
    Street_Number_Steet_Name: "",
    Company_Postal_Code: "",
    Company_City: "",
    Company_Country: "",
    Province_Incorporation: "",
    First_Name: "",
    Last_Name: "",
    Date_Birth: "",
    Residential_Address: "",
    Manager_Postal_Code: "",
    Manager_City: "",
    Manager_Country: "",
    Currency: "",
    Bank_Country: "",
    Account_Holder_Name: "",
    Routing_Number: "",
    Account_Number: ""
};

const signupReducer = (state = signupForm, action) => {
    let newState = { ...state }

    switch(action.type) {
        case "Brand_Name_DBA":
            newState.Brand_Name_DBA = action.payload;
        break;
        case "Online_Store_Website":
            newState.Online_Store_Website = action.payload;
        break;
        case "Business_Owner_Email":
            newState.Business_Owner_Email = action.payload;
        break;
        case "Federal_Tax_Classification":
            newState.Federal_Tax_Classification = action.payload;
        break;
        case "Tax_Identification_Number":
            newState.Tax_Identification_Number = action.payload;
        break;
        case "Legal_Name_Company":
            newState.Legal_Name_Company = action.payload;
        break;
        case "Street_Number_Steet_Name":
            newState.Street_Number_Steet_Name = action.payload;
        break;
        case "Company_Postal_Code":
            newState.Company_Postal_Code = action.payload;
        break;
        case "Company_City":
            newState.Company_City = action.payload;
        break;
        case "Company_Country":
            newState.Company_Country = action.payload;
        break;
        case "Province_Incorporation":
            newState.Province_Incorporation = action.payload;
        break;
        case "First_Name":
            newState.First_Name = action.payload;
        break;
        case "Last_Name":
            newState.Last_Name = action.payload;
        break;
        case "Date_Birth":
            newState.Date_Birth = action.payload;
        break;
        case "Residential_Address":
            newState.Residential_Address = action.payload;
        break;
        case "Manager_Postal_Code":
            newState.Manager_Postal_Code = action.payload;
        break;
        case "Manager_City":
            newState.Manager_City = action.payload;
        break;
        case "Manager_Country":
            newState.Manager_Country = action.payload;
        break;
        case "Currency":
            newState.Currency = action.payload;
        break;
        case "Bank_Country":
            newState.Bank_Country = action.payload;
        break;
        case "Account_Holder_Name":
            newState.Account_Holder_Name = action.payload;
        break;
        case "Routing_Number":
            newState.Routing_Number = action.payload;
        break;
        case "Account_Number":
            newState.Account_Number = action.payload;
        break;
        case "Login_Email":
            newState.Login_Email = action.payload;
        break;
        case "Login_Password":
            newState.Login_Password = action.payload;
        break;
        case "Login_Password_Re":
            newState.Login_Password_Re = action.payload;
        break;
    }

    state = newState;
    return state;
}

export default signupReducer;