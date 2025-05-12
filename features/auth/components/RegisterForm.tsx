import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Switch,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AuthHeader } from './AuthHeader';
import { SocialLoginButtons } from './SocialLoginButtons';
import { InputField } from './InputField';
import { AuthLayout } from '../layouts/AuthLayout';

export const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const router = useRouter();

    const handleRegister = () => {
        if (!acceptedTerms) {
            Alert.alert('Atenção', 'Você precisa aceitar os termos para continuar.');
            return;
        }

        console.log({ name, email, password });
        router.replace('/login'); // simulação
    };

    return (
        <AuthLayout>
            <AuthHeader
                title="Registrar"
                subtitle="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
            />

            <SocialLoginButtons />

            <Text style={styles.or}>or</Text>

            <InputField
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />

            <InputField
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <InputField
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.termsContainer}>
                <Switch value={acceptedTerms} onValueChange={setAcceptedTerms} />
                <Text style={styles.termsText}>
                    Eu aceito os{' '}
                    <Text style={styles.termsLink}>Termos de Serviço</Text> e{' '}
                    <Text style={styles.termsLink}>Politica de Privacidade</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
                Já possui cadastro?{' '}
                <Text style={styles.footerLink} onPress={() => router.replace('/login')}>
                    Entrar
                </Text>
            </Text>
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    or: {
        textAlign: 'center',
        marginVertical: 12,
        color: '#999',
    },
    input: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    termsText: {
        flex: 1,
        fontSize: 14,
        color: '#555',
    },
    termsLink: {
        color: '#007AFF',
        fontWeight: '600',
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 24,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    footer: {
        textAlign: 'center',
        color: '#555',
    },
    footerLink: {
        color: '#007AFF',
        fontWeight: '600',
    },
});
