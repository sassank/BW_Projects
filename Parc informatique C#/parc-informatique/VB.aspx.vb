Imports System.Data
Imports System.Configuration
Imports MySql.Data.MySqlClient
Partial Class VB
    Inherits System.Web.UI.Page

    Private txtSerial As Object

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Me.IsPostBack Then
            Me.BindGrid()
        End If
    End Sub

    Private Sub BindGrid()
        Dim constr As String = ConfigurationManager.ConnectionStrings("constr").ConnectionString
        Using con As New MySqlConnection(constr)
            Using cmd As New MySqlCommand("SELECT * FROM res_materiel")
                Using sda As New MySqlDataAdapter()
                    cmd.Connection = con
                    sda.SelectCommand = cmd
                    Using dt As New DataTable()
                        sda.Fill(dt)
                        GridView1.DataSource = dt
                        GridView1.DataBind()
                    End Using
                End Using
            End Using
        End Using
    End Sub

    Protected Sub Insert(sender As Object, e As EventArgs)
        Dim nom As String = txtNom.Text
        Dim description As String = txtDescription.Text
        Dim serial As String = txtSerial.Text
        Dim prix As Integer = intPrix.Text
        Dim constr As String = ConfigurationManager.ConnectionStrings("constr").ConnectionString
        Using con As New MySqlConnection(constr)
            Using cmd As New MySqlCommand("INSERT INTO res_materiel (id, marque_id, type_id, nom, description, prix, serial) VALUES (null, 1, 1, @Nom, @Description, @Prix, @Serial)")
                Using sda As New MySqlDataAdapter()
                    cmd.Parameters.AddWithValue("@Nom", nom)
                    cmd.Parameters.AddWithValue("@description", description)
                    cmd.Parameters.AddWithValue("@serial", serial)
                    cmd.Parameters.AddWithValue("@prix", prix)
                    cmd.Connection = con
                    con.Open()
                    cmd.ExecuteNonQuery()
                    con.Close()
                End Using
            End Using
        End Using
        Me.BindGrid()
    End Sub

    Protected Sub OnRowEditing(sender As Object, e As GridViewEditEventArgs)
        GridView1.EditIndex = e.NewEditIndex
        Me.BindGrid()
    End Sub

    Protected Sub OnRowCancelingEdit(sender As Object, e As EventArgs)
        GridView1.EditIndex = -1
        Me.BindGrid()
    End Sub

    Protected Sub OnRowUpdating(sender As Object, e As GridViewUpdateEventArgs)
        Dim row As GridViewRow = GridView1.Rows(e.RowIndex)
        Dim idmateriel As Integer = Convert.ToInt32(GridView1.DataKeys(e.RowIndex).Values(0))
        Dim nom As String = TryCast(row.FindControl("txtNom"), TextBox).Text
        Dim serial As String = TryCast(row.FindControl("txtSerial"), TextBox).Text
        Dim description As String = TryCast(row.FindControl("txtDescription"), TextBox).Text
        Dim prix As Integer = TryCast(row.FindControl("intPrix"), TextBox).Text
        Dim constr As String = ConfigurationManager.ConnectionStrings("constr").ConnectionString
        Using con As New MySqlConnection(constr)
            Using cmd As New MySqlCommand("UPDATE res_materiel SET Nom = @Nom, Description = @Description, Serial = @Serial WHERE Id = @Id")
                Using sda As New MySqlDataAdapter()
                    cmd.Parameters.AddWithValue("@Id", idmateriel)
                    cmd.Parameters.AddWithValue("@Nom", nom)
                    cmd.Parameters.AddWithValue("@Description", description)
                    cmd.Parameters.AddWithValue("@Serial", serial)
                    cmd.Connection = con
                    con.Open()
                    cmd.ExecuteNonQuery()
                    con.Close()
                End Using
            End Using
        End Using
        GridView1.EditIndex = -1
        Me.BindGrid()
    End Sub

    Protected Sub OnRowDataBound(sender As Object, e As GridViewRowEventArgs)
        If e.Row.RowType = DataControlRowType.DataRow AndAlso e.Row.RowIndex <> GridView1.EditIndex Then
            Dim nom As String = TryCast(e.Row.FindControl("lblNom"), Label).Text
        End If
    End Sub

    Protected Sub OnRowDeleting(sender As Object, e As GridViewDeleteEventArgs)
        Dim idmateriel As Integer = Convert.ToInt32(GridView1.DataKeys(e.RowIndex).Values(0))
        Dim constr As String = ConfigurationManager.ConnectionStrings("constr").ConnectionString
        Using con As New MySqlConnection(constr)
            Using cmd As New MySqlCommand("DELETE FROM res_materiel WHERE Id = @Id")
                Using sda As New MySqlDataAdapter()
                    cmd.Parameters.AddWithValue("@Id", idmateriel)
                    cmd.Connection = con
                    con.Open()
                    cmd.ExecuteNonQuery()
                    con.Close()
                End Using
            End Using
        End Using
        Me.BindGrid()
    End Sub

    Private Sub VB_CommitTransaction(sender As Object, e As EventArgs) Handles Me.CommitTransaction

    End Sub
End Class
