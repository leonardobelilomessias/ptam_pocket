import { type SQLiteDatabase} from 'expo-sqlite'
export async function InitializeDatabase(database:SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS  comparative_full (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client TEXT,
        goal   TEXT,
        identify_building TEXT,
        description_building TEXT,
        metodology_building TEXT,
        view_building TEXT,
        analyse_marketing TEXT,
        search_marketing TEXT,
        homogen_marketing TEXT,
        handle_math TEXT,
        defined_value INTEGER,
        conclusion TEXT,
        atach TEXT,     
        )
        `)

}

