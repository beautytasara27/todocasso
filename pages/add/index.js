import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function AddToDo() {
  const [showAddButton, setshowAddButton] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerPosition = useRef(new Animated.Value(-300)).current;
  const [formValues, setFormValues] = useState({
    tag: "",
    date: new Date(),
    time: new Date(),
    description: "",
    title: "",
  });
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleShowDatePicker = () => {
    setShowDatePicker(true);
  };
  const handleShowTimePicker = () => {
    setShowTimePicker(true);
  };
 
  const handleButtonPress = () => {
    setshowAddButton(false);
    setShowDrawer(true);
    Animated.timing(drawerPosition, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleHideButtonPress = () => {
    setshowAddButton(true);
    setShowDrawer(false);
    Animated.timing(drawerPosition, {
      toValue: -300,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      {showAddButton && (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Ionicons name="ios-add-circle" size={60} color={"#4484EA"} />
        </TouchableOpacity>
      )}

      <Modal
        visible={showDrawer}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowDrawer(false);
          setshowAddButton(true);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.title}>Add a new task</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
              name="title"
              style={styles.input}
              value={formValues.title}
              onChangeText={handleInputChange}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 8,
                marginBottom: 10,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Date</Text>
                <Pressable onPress={handleShowDatePicker}>
                  <Text style={styles.input}>{formValues.date.toLocaleDateString()}</Text>
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker
                    name="date"
                    value={formValues.date}
                    mode="date"
                    display={"default"}
                    onChange={handleInputChange}
                    onCancel={() => setShowDatePicker(false)}
                  />
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Time</Text>
                <Pressable onPress={handleShowTimePicker}>
                  <Text style={styles.input}>
                    {formValues.time.toLocaleTimeString([], {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </Pressable>

                {showTimePicker && (
                  <DateTimePicker
                    name="time"
                    value={formValues.time}
                    mode="time"
                    display={"default"}
                    onChange={handleInputChange}
                    onCancel={() => setShowTimePicker(false)}
                  />
                )}
              </View>
            </View>
            <Text style={styles.label}>Description</Text>

            <TextInput
              name="description"
              style={styles.input}
              value={formValues.description}
              onChangeText={(inputText) => setDescription(inputText)}
            />
            <Text style={styles.label}>Tags</Text>

            <TextInput
              name="tag"
              style={styles.input}
              value={formValues.tag}
              onChangeText={(inputText) => setTag(inputText)}
            />
            <TouchableOpacity
              style={styles.hideButton}
              onPress={handleHideButtonPress}
            >
              <Text style={styles.buttonText}>Create new Task</Text>
            </TouchableOpacity>
            {/* Add content for drawer */}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 76,
    right: 4,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 440,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
    elevation: 5,
  },
  hideButton: {
    alignSelf: "center",
    paddingVertical: 8,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#4484EA",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 4,
  },
  label: {
    fontWeight: "normal",
    fontSize: 14,
    paddingVertical: 2,
  },
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#D3D3D3",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContentContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
