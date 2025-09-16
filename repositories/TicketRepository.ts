import { Repository } from "../libs/Repository";
import { Attraction } from "../models/Attraction";
import { Ticket } from "../models/Ticket";


export class TicketRepository extends Repository {
  async findAll(): Promise<Ticket[]> {
    const query = {
      name: "fetch-all-tickets",
      text: `SELECT * FROM ticket`,
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Ticket(
          row.id_ticket,
          row.icon,
          row.ticket_type,
          row.audience,
          row.details,
          row.ticket_price);
      });

      return data;
    }
    catch (error) {
      return [];
    }
  }

  async findById(id: number): Promise<Ticket | null> {
    const query = {
      name: "fetch-ticket-by-id",
      text: `SELECT * FROM ticket WHERE id_ticket = $1`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      const ticket = new Ticket(
        result.rows[0].id_ticket,
        result.rows[0].icon,
        result.rows[0].ticket_type,
        result.rows[0].audience,
        result.rows[0].details,
        result.rows[0].ticket_price);

      return ticket;
    }
    catch (error) {
      return null;
    }
  }

  async findTicketAttractions(id: number): Promise<Attraction[]> {
    const query = {
      name: "fetch-all-ticket-attractions",
      text: `SELECT 
        t.id_ticket,
        t.ticket_type,
        a.id_attraction,
        a.attraction_name,
        a.attraction_description,
        a.attraction_illustration_path
      FROM 
        ticket t
      JOIN 
        Accéder ac ON t.id_ticket = ac.id_ticket
      JOIN  
        attraction a ON ac.id_attraction = a.id_attraction
      WHERE 
        t.id_ticket = $1`,
      values: [id],
    };

    try {
      const result = await this.pool.query(query);

      const data = result.rows.map((row) => {
        return new Attraction(row.id_attraction, row.attraction_name,
          row.attraction_description, row.attraction_illustration_path);
      });

      return data;
    } catch (error) {
      return [];
    }
  }
}