import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Eye, EyeOff} from 'lucide-react-native';
import {colors} from '../../theme/theme';

const InputPassword = ({placeholder, onChangeText, value, editable}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, !editable && styles.notEditable]}>
      <TextInput
        style={[styles.input, !editable && styles.notEditableText]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        placeholderTextColor={colors.other}
        secureTextEntry={!showPassword}
        editable={editable}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
        {showPassword ? (
          <EyeOff size={24} color={colors.border} strokeWidth={1.8} />
        ) : (
          <Eye size={24} color={colors.border} strokeWidth={1.8} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderColor: colors.border,
    padding: 1,
    fontSize: 16,
    marginBottom: 12,
  },
  notEditable: {
    opacity: 0.5,
  },
  input: {
    paddingHorizontal: 12,
    padding: 2,
    flex: 1,
    color: '#000000',
    fontSize: 16,
    paddingVertical: 10,
  },
  notEditableText: {
    color: 'gray',
  },
  eyeIcon: {
    position: 'absolute',
    padding: 14,
    right: 0,
  },
});

export default InputPassword;
