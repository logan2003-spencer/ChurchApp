import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";
import { Ionicons } from "@expo/vector-icons";

const Signup = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (name: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 6 }}>
      {/* Navigation Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "blue", padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Sign Up</Text>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Page Title */}
      <View style={{ marginTop: 6 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Sign Up</Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "gray" }}>Event Details</Text>
      </View>

      {/* Event Info */}
      <View style={{ marginTop: 6 }}>
        <Text style={{ color: "gray", fontWeight: "bold" }}>Event Description:</Text>
        <Text style={{ color: "gray" }}>Details about the event</Text>
        <Text style={{ color: "gray", fontWeight: "bold", marginTop: 4 }}>Event Address:</Text>
        <Text style={{ color: "gray" }}>Address of event</Text>
      </View>

      {/* Form Fields */}
      <View style={{ marginTop: 6 }}>
        <Text style={{ color: "gray", fontWeight: "bold" }}>Name</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", padding: 3, borderRadius: 4, marginTop: 1 }}
          placeholder="Value"
          value={form.name}
          onChangeText={(text) => handleChange("name", text)}
        />

        <Text style={{ color: "gray", fontWeight: "bold", marginTop: 4 }}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", padding: 3, borderRadius: 4, marginTop: 1 }}
          placeholder="Value"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange("email", text)}
        />

        <Text style={{ color: "gray", fontWeight: "bold", marginTop: 4 }}>Phone Number</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: "gray", padding: 3, borderRadius: 4, marginTop: 1 }}
          placeholder="+1 (000) 000-0000"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(text) => handleChange("phone", text)}
        />
      </View>

      {/* Add Family Checkbox */}
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
        <CheckBox value={isChecked} onValueChange={setIsChecked} />
        <Text style={{ marginLeft: 2, color: "gray" }}>Add Family</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={{ backgroundColor: "blue", padding: 4, borderRadius: 8, marginTop: 6 }} onPress={() => alert("Signed Up!")}>
        <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
