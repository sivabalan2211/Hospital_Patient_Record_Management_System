const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

var schema = new mongoose.Schema({
    Room:{
        type :String,
        required : false
    },
    Id :{
        type: String,
        required: false
    },
    Name :{
        type: String,
        required: false
    },
    Age:{
        type: String,
        required: false
    },
    Gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: false
    },
    BloodGroup:{
        type: String,
        required: false
    },
    PhoneNumber:{
        type: String,
        required: false
    },
    BloodPressure:{
        type: String,
        required: false
    },
    DateofAdmission:{
        type: String,
        required: false,
        
    },
    AadharNumber:{
        type: String,
        required: false
    },
    Address:{
        type: String,
        required: false
    },
    City: {
        type: String,
        enum: ['ariyalur', 'chengalpattu', 'chennai', 'coimbatore', 'cuddalore', 'dharmapuri', 'dindigul', 'erode', 'kallakurichi', 'kancheepuram', 'karur', 'krishnagiri', 'madurai', 'nagapattinam', 'namakkal', 'perambalur', 'pudukkottai', 'ramanathapuram', 'ranipet', 'salem', 'sivagangai', 'tenkasi', 'thanjavur', 'theni', 'thiruvallur', 'thiruvarur', 'thoothukudi', 'tiruchirapalli', 'tirunelveli', 'tirupathur', 'tiruppur', 'tiruvannamalai', 'vellore', 'viluppuram', 'virudhunagar'],
        required: false
    },
    State:{
        type: String,
        enum: ['Andaman and Nicobar Islands', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadar and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
        required: false
    },
    PinCode:{
        type: String,
        required: false
    },
    AttenderName:{
        type: String,
        required: false
    },
    AttenderPhoneNo:{
        type: String,
        required: false
    },
    AttenderAadharNo:{
        type: String,
        required: false
    },
    AttenderAddress:{
        type: String,
        required: false
    },
    AttenderCity:{
        type: String,
        enum: ['ariyalur', 'chengalpattu', 'chennai', 'coimbatore', 'cuddalore', 'dharmapuri', 'dindigul', 'erode', 'kallakurichi', 'kancheepuram', 'karur', 'krishnagiri', 'madurai', 'nagapattinam', 'namakkal', 'perambalur', 'pudukkottai', 'ramanathapuram', 'ranipet', 'salem', 'sivagangai', 'tenkasi', 'thanjavur', 'theni', 'thiruvallur', 'thiruvarur', 'thoothukudi', 'tiruchirapalli', 'tirunelveli', 'tirupathur', 'tiruppur', 'tiruvannamalai', 'vellore', 'viluppuram', 'virudhunagar'],
        required: true
    },
    AttenderState:{
        type: String,
        enum: ['Andaman and Nicobar Islands', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadar and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
        required: true
    },
    AttenderPinCode:{
        type: String,
        required: false
    }
})

const Userdb = mongoose.model('userdbs',schema);

module.exports = Userdb;